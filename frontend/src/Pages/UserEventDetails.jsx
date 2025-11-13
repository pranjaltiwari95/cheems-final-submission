'use client'

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EventDetailsHeader from "../Component/EventDetailsHeader";
import RegisterEventModal from "../Component/RegisterEventModal";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5003/api",
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("petOwnerToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const UserEventDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [registrationError, setRegistrationError] = useState(null);
  const [registrationSuccess, setRegistrationSuccess] = useState(null);

  const token = localStorage.getItem("petOwnerToken");

  const fetchData = async () => {
    try {
      setLoading(true);
      const eventResponse = await api.get(`/events/${id}`);
      setEvent(eventResponse.data);

      if (token) {
        const [userResponse, regResponse] = await Promise.all([
          api.get("/users/profile"),
          api.get(`/registrations/event/${id}`),
        ]);
        setUser(userResponse.data);

        const userRegistrations = regResponse.data.registrations || [];
        const isUserRegistered = userRegistrations.some(
          (reg) => {
            const userId = reg.userId;
            const userIdToCompare = typeof userId === "string" ? userId : userId?._id;
            return (
              userIdToCompare === userResponse.data._id &&
              reg.paymentStatus === "paid" &&
              reg.status === "active"
            );
          }
        );
        setIsRegistered(isUserRegistered);
      }
    } catch (err) {
      setError(err.response?.data?.message || err.message);
      console.error("Error fetching data:", err);
      if (err.response?.status === 401) {
        localStorage.removeItem("petOwnerToken");
        navigate("/login");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id, token]);

  const handleRegisterClick = () => {
    if (!token) {
      setRegistrationError("Please log in to register for the event.");
      navigate("/login");
      return;
    }
    setIsModalOpen(true);
    setRegistrationError(null);
    setRegistrationSuccess(null);
  };

  const handleConfirmRegistration = (formData) => {
    setIsModalOpen(false);
    setRegistrationError(null);
    setRegistrationSuccess(
      `Thanks for sharing your interest! We've noted that you'd like ${formData.tickets || 1
      } ticket${(formData.tickets || 1) > 1 ? "s" : ""}. Our events team will reach out shortly to confirm availability and next steps.`
    );
  };

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto mt-32 px-6 py-20 text-center bg-gradient-to-br from-[#FFEADF] to-[#FFE1D6]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-3 border-b-3 border-[#FF7E67] mx-auto"></div>
        <p className="text-gray-600 mt-6 text-lg font-medium">Loading event details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-6xl mx-auto mt-32 px-6 py-20">
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-2xl shadow-lg">
          <div className="flex items-center">
            <svg className="h-6 w-6 text-red-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            <p className="ml-4 text-base text-red-700 font-medium">Error: {error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="max-w-6xl mx-auto mt-32 px-6 py-20 text-center bg-gradient-to-br from-[#FFEADF] to-[#FFE1D6]">
        <p className="text-gray-600 text-xl font-medium">Event not found</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-[#FFEADF] to-[#FFE1D6] min-h-screen pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <EventDetailsHeader event={event} />

        <div className="mt-12 flex flex-col items-center">
          {!isRegistered ? (
            <>
              <button
                onClick={handleRegisterClick}
                className="bg-gradient-to-r from-[#FF7E67] to-[#FF5C7A] text-white px-10 py-4 rounded-xl hover:bg-[#2D1B3D] transition-colors flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-xl font-semibold"
              >
                Express Interest
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
              {registrationSuccess && (
                <p className="text-green-600 mt-4 text-base bg-green-50 px-6 py-3 rounded-xl shadow-sm">
                  {registrationSuccess}
                </p>
              )}
              {registrationError && (
                <p className="text-red-500 mt-4 text-base bg-red-50 px-6 py-3 rounded-xl shadow-sm">
                  {registrationError}
                </p>
              )}
            </>
          ) : (
            <div className="text-center bg-white/80 p-8 rounded-2xl shadow-lg w-full max-w-md transform transition hover:scale-105">
              <p className="text-green-600 font-semibold text-xl flex items-center justify-center gap-3">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                You have successfully registered for this event!
              </p>
              {registrationSuccess && (
                <p className="text-green-600 mt-3 text-base">{registrationSuccess}</p>
              )}
            </div>
          )}
        </div>

        {isModalOpen && (
          <RegisterEventModal
            event={event}
            user={user}
            onConfirm={handleConfirmRegistration}
            onClose={() => {
              setIsModalOpen(false);
              setRegistrationError(null);
              fetchData();
            }}
            error={registrationError}
          />
        )}
      </div>
    </div>
  );
};

export default UserEventDetailsPage;