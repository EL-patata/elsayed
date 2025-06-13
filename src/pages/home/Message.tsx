import React from "react";

const Message = () => {
  return (
    <div className="py-20 mt-10 bg-gray-100" style={{ direction: "rtl" }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* رسالة المركز */}
          <div className="bg-white shadow-lg p-6 rounded-xl border-r-8 border-green-800">
            <h2 className="text-3xl font-bold text-gray-800 bg-green-50 py-4 pr-4 rounded-lg">
              رسالة مركز الاستدامة بالجامعة
            </h2>
            <p className="text-gray-600 mt-4 text-lg leading-relaxed">
              بناء استراتيجية للجامعة مبنية على أهداف الأمم المتحدة للتنمية
              المستدامة (SDGs)، وأهداف النسخة الجديدة لرؤية مصر 2030، ومحاور
              الاستراتيجية الوطنية للتعليم العالي والبحث العلمي 2022 - 2023،
              والسعي إلى تحقيقها.
            </p>
            <button className="mt-4 bg-green-600 hover:bg-green-700 transition-colors text-white px-5 py-2 rounded-lg shadow-md">
              اعرف أكثر
            </button>
          </div>

          {/* رؤية المركز */}
          <div className="bg-white shadow-lg p-6 rounded-xl border-r-8 border-green-800">
            <h2 className="text-3xl font-bold text-gray-800 bg-green-50 py-4 pr-4 rounded-lg">
              رؤية المركز
            </h2>
            <p className="text-gray-600 mt-4 text-lg leading-relaxed">
              تطوير آليات الاستدامة وتطبيقها ومتابعتها لتحقيق التميز لجامعة
              الأقصر في مجال التنمية المستدامة، بما يسهم في تحقيق رؤية مصر 2030،
              ويضع الجامعة في طليعة الجامعات المصرية والإقليمية والعالمية.
            </p>
            <button className="mt-4 bg-green-600 hover:bg-green-700 transition-colors text-white px-5 py-2 rounded-lg shadow-md">
              اعرف أكثر
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
