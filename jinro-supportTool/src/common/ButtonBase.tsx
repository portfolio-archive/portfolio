const BTN_VARIANTS = {
  normal:{
    bg: 'bg-lavender',
    text: 'text-gray',
    border: 'border-d-blue'
  },
  cancel:{
    bg: 'bg-l-yellow',
    text: 'text-brown',
    border: 'border-orange-500'
  },
  confirm:{
    bg: 'bg-l-green',
    text: 'text-gray',
    border: 'border-d-green'
  }
} as const;

type BtnProps = {
  children: React.ReactNode;
  variant?: keyof typeof BTN_VARIANTS;
  onClick: () => void;
};

export const BtnBase = ({children,variant = 'normal', onClick}:BtnProps) => {
  const style = BTN_VARIANTS[variant];

  return (
    <button 
      onClick={onClick}
      className={`border-2 px-4 py-2 rounded transition hover:opaxity-80 ${style.bg} ${style.text} ${style.border}`}>
      {children}
    </button>
  );
};