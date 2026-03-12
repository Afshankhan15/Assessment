import { useEffect, useRef, useState } from "react";
import Modal from "react-modal";

interface AddCardDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (name: string) => Promise<void>;
}

Modal.setAppElement("#root");

export const AddCardDialog = ({
  isOpen,
  onClose,
  onSubmit,
}: AddCardDialogProps) => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setName("");
      setError("");
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmed = name.trim();

    if (trimmed.length < 3) {
      setError("Card holder name must be at least 3 characters.");
      return;
    }

    setIsSubmitting(true);

    try {
      await onSubmit(trimmed);
      onClose();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="fixed inset-0 bg-aspire-black/40 backdrop-blur-sm flex items-center justify-center z-50"
      className="w-full max-w-md bg-aspire-background rounded-xl p-7 shadow-aspire-shadow-card outline-none mx-4"
    >
      <p className="text-title leading-title font-bold text-aspire-black">
        Add New Card
      </p>

      <p className="mt-1.5 text-xs leading-description text-aspire-black opacity-60">
        Enter the card holder name. The card number and expiry date will be
        generated automatically.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        <div>
          <label className="block text-xs leading-sm font-bold text-aspire-black mb-1">
            Card Holder Name
          </label>

          <input
            ref={inputRef}
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setError("");
            }}
            placeholder="e.g. Mark Henry"
            className="w-full border border-aspire-border rounded-lg px-4 py-3
            text-sm leading-description
            focus:border-aspire-blue focus:ring-2 focus:ring-aspire-blue/20 outline-none"
          />

          {error && (
            <p className="mt-1 text-xxs leading-xs text-red-500">{error}</p>
          )}
        </div>

        <div className="flex justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg border border-gray-300
            text-xs font-bold text-aspire-black hover:bg-aspire-white/80 cursor-pointer"
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={isSubmitting}
            className="px-3 py-2 rounded-lg bg-aspire-blue
            text-xs font-bold text-aspire-white hover:bg-aspire-blue/80
            disabled:opacity-60 cursor-pointer transition-colors duration-200"
          >
            {isSubmitting ? "Adding..." : "Add Card"}
          </button>
        </div>
      </form>
    </Modal>
  );
};
