"use client";

import React from "react";

const AdminError = ({ error }: { error: Error & { digest?: string } }) => {
  return (
    <div className="max-w-2xl mx-auto my-8 text-center">
      <p>{error.message}</p>
    </div>
  );
};

export default AdminError;
