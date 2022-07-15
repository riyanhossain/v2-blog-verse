import React from "react";
import { Space, Spin } from "antd";

export default function Loading() {
  return (
    <section
      className="flex justify-center items-center mt-2"
      style={{ minHeight: "calc(100vh - 8rem)" }}
    >
      <div className="w-blogbody flex justify-center items-center">
        <Space size="middle">
          <Spin size="large" />
        </Space>
      </div>
    </section>
  );
}
