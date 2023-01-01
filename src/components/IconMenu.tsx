interface IconMenuProps {
  handleClick: () => void
}

export const IconMenu = ({ handleClick }: IconMenuProps) => (
  <button onClick={handleClick}>
    <div className="flex gap-1">
      <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
      <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
      <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
    </div>
    <span className="text-xs block text-yellow-400 font-semibold">menu</span>
  </button>
)
