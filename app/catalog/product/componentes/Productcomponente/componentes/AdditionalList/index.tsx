import type { Additional } from "@/types/Product";

export function AdditionalList({
    items,
    qty,
    add,
    sub,
  }: {
    items: Additional[];
    qty: Record<number, number>;
    add: (id: number) => void;
    sub: (id: number) => void;
  }) {
    return (
      <div className="flex-1 overflow-y-auto px-6 pb-4 space-y-3 bg-gray-100">
        {items.map((item) => (
          <div
            key={item.id}
            className={`bg-white p-4 rounded-2xl shadow flex items-center justify-between border-2 transition-all ${
              qty[item.id] ? "border-green-500" : "border-transparent"
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-2xl">
                {item.icon}
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{item.name}</p>
                <p className="text-green-600 font-bold text-xs">
                  R$ {item.price.toFixed(2)}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => sub(item.id)}
                className="w-8 h-8 bg-gray-200 rounded-full text-lg flex items-center justify-center"
              >
                -
              </button>

              <span className="w-6 text-center font-semibold">
                {qty[item.id] || 0}
              </span>

              <button
                onClick={() => add(item.id)}
                className="w-8 h-8 bg-green-600 text-white rounded-full text-lg flex items-center justify-center"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
