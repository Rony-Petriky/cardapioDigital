import type { Additional } from "@/types/Product";

interface AdditionalListProps {
  type: "free" | "pago" | "combo";
  max?: number;
  items: Additional[];
  qty: Record<number, number>;
  add: (id: number) => void;
  sub: (id: number) => void;
}

export function AdditionalList({
  type,
  max,
  items,
  qty,
  add,
  sub,
}: AdditionalListProps) {

  // total selecionado no grupo
  const totalSelected = items.reduce(
    (sum, item) => sum + (qty[item.id] || 0),
    0
  );

  const handleAdd = (id: number) => {
    // 🔘 COMBO = RADIO
    if (type === "combo") {
      items.forEach(item => {
        if (item.id !== id && qty[item.id]) {
          sub(item.id); // remove outros
        }
      });
      add(id);
      return;
    }

    // 🔒 LIMITE MÁXIMO
    if (max && totalSelected >= max) return;

    add(id);
  };

  return (
    <div className="flex-1 overflow-y-auto px-6 pb-4 space-y-3 bg-gray-100">
      {items.map((item) => {
        const selected = !!qty[item.id];

        return (
          <div
            key={item.id}
            className={`bg-white p-4 rounded-2xl shadow flex items-center justify-between border-2 transition-all ${
              selected ? "border-green-500 bg-green-50" : "border-transparent"
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-2xl">
                {item.icon}
              </div>

              <div>
                <p className="font-semibold text-gray-900 text-sm">
                  {item.name}
                </p>
                <p className="text-green-600 font-bold text-xs">
                  R$ {item.price.toFixed(2)}
                </p>
              </div>
            </div>

            {/* CONTROLE */}
            {type === "combo" ? (
              <button
                onClick={() => handleAdd(item.id)}
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  selected
                    ? "border-green-600"
                    : "border-gray-300"
                }`}
              >
                {selected && (
                  <div className="w-3 h-3 rounded-full bg-green-600" />
                )}
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => sub(item.id)}
                  disabled={!selected}
                  className="w-8 h-8 bg-gray-200 rounded-full text-lg flex items-center justify-center disabled:opacity-40"
                >
                  -
                </button>

                <span className="w-6 text-center font-semibold">
                  {qty[item.id] || 0}
                </span>

                <button
                  onClick={() => handleAdd(item.id)}
                  disabled={!!max && totalSelected >= max}
                  className="w-8 h-8 bg-green-600 text-white rounded-full text-lg flex items-center justify-center disabled:opacity-40"
                >
                  +
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
