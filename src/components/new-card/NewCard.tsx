export default function NewCard() {
  return (
    <div className="border rounded-xl w-full py-4 px-4 border border-black">
      Prompt <input type="text" className="border rounded-xl w-full py-4 px-4 border border-black" />
      Answer <input type="text" className="border rounded-xl w-full py-4 px-4 border border-black" />
      <button className="bg-gray-500 px-4 py-2 rounded text-white mt-4">Add</button>
    </div>
  );
}
