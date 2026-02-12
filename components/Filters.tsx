export default function Filters() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md flex gap-4">
      <select className="border p-2 rounded-lg">
        <option>Categoria</option>
        <option>Eletrônicos</option>
        <option>Vestuário</option>
        <option>Casa</option>
      </select>

      <select className="border p-2 rounded-lg">
        <option>Preço</option>
        <option>Até R$50</option>
        <option>R$50 - R$200</option>
        <option>Acima de R$200</option>
      </select>
    </div>
  );
}