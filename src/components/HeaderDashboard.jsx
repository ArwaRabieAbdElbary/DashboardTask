import React, { useState } from "react";
import { AiOutlineBell, AiOutlineUser, AiOutlineSetting } from "react-icons/ai";

const HeaderDashboard = () => {
  const [notificationCount] = useState(3);
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    {
      id: 1,
      message: "New booking request from client",
      time: "5 min ago",
      unread: true,
    },
    {
      id: 2,
      message: "Payment received for Miami property",
      time: "1 hour ago",
      unread: true,
    },
    {
      id: 3,
      message: "Your listing has been approved",
      time: "2 hours ago",
      unread: false,
    },
  ];

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-end px-4 md:px-6 sticky top-0 z-30 shadow-sm">
      <div className="flex items-center gap-2 md:gap-4">
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
          >
            <AiOutlineBell size={24} />
            {notificationCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-semibold">
                {notificationCount}
              </span>
            )}
          </button>

          {showNotifications && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setShowNotifications(false)}
              />

              <div className="fixed sm:absolute right-4 sm:right-0 left-4 sm:left-auto mt-2 bg-white rounded-lg shadow-xl border border-gray-200 z-20 sm:w-80">
                <div className="p-4 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-800">Notifications</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.map((notif) => (
                    <div
                      key={notif.id}
                      className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors ${
                        notif.unread ? "bg-sky-50" : ""
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        {notif.unread && (
                          <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                        )}
                        <div className="flex-1">
                          <p className="text-sm text-gray-800">
                            {notif.message}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {notif.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-3 text-center border-t border-gray-200">
                  <button className="text-sm text-sky-600 hover:text-sky-700 font-medium">
                    View all notifications
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors hidden sm:flex">
          <AiOutlineSetting size={24} />
        </button>

        <div className="flex items-center gap-2 md:gap-3 pl-2 md:pl-4 border-l border-gray-300">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-gray-800">ِArwa Rabie</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
          <div className="w-9 h-9 md:w-10 md:h-10 bg-sky-500 rounded-full flex items-center justify-center text-white font-semibold cursor-pointer hover:bg-sky-600 transition-colors">
            <AiOutlineUser size={18} className="md:hidden" />
            <AiOutlineUser size={20} className="hidden md:block" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderDashboard;
