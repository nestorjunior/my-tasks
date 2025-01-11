"use client";
import * as Form from "@radix-ui/react-form";
import { useState } from "react";

export default function TabLogin() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = () => {
    setFormSubmitted(true);
    // Aqui você pode adicionar mais lógica de submissão
  };

  return (
    <Form.Root onSubmit={handleSubmit}>
      <Form.Field name="email">
        <div className="mb-4">
          <Form.Label className="block text-sm font-medium text-gray-700">
            Email
          </Form.Label>
          <Form.Control asChild>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </Form.Control>
          {formSubmitted && (
            <Form.Message className="text-red-600 text-sm mt-1">
              Invalid email address
            </Form.Message>
          )}
        </div>
      </Form.Field>

      <Form.Field name="password">
        <div className="mb-6">
          <Form.Label className="block text-sm font-medium text-gray-700">
            Password
          </Form.Label>
          <Form.Control asChild>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </Form.Control>
          {formSubmitted && (
            <Form.Message className="text-red-600 text-sm mt-1">
              Password is required
            </Form.Message>
          )}
        </div>
      </Form.Field>

      <Form.Submit className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Login
      </Form.Submit>
    </Form.Root>
  );
}
