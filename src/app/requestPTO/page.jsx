import { REQUEST_PTO } from "../needed/constans";

export default function RequestPTO() {
  return (
    <div className="container py-10">
      <h2 className="text-3xl font-bold text-prime">
        Перечень Необходимой технической документации для подписания декларации
        о соответствии
      </h2>

      <div className="mt-4"></div>
      {REQUEST_PTO.map((item, i) => {
        return (
          <>
            <p>
              <span className="text-prime font-bold">
                {i + 1}
                {`)`}
              </span>
              &nbsp;
              <span>{item};</span>
            </p>
          </>
        );
      })}
    </div>
  );
}
