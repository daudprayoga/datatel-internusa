"use client"

import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Trash2, Loader2 } from "lucide-react"

interface DeleteConfirmModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onConfirm: () => void | Promise<void>
  title?: string
  description?: string
  itemName?: string
  confirmText?: string
  cancelText?: string
  isLoading?: boolean
}

export function DeleteConfirmModal({
  open,
  onOpenChange,
  onConfirm,
  title = "Hapus Data",
  description = "Apakah Anda yakin ingin menghapus data ini? Tindakan ini tidak dapat dibatalkan.",
  itemName,
  confirmText = "Hapus",
  cancelText = "Batal",
  isLoading = false,
}: DeleteConfirmModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[420px] p-6 gap-0 overflow-hidden border-border/60 shadow-2xl rounded-2xl">
        <div className="flex flex-col items-center text-center pt-2 pb-2">
          {/* Icon Badge */}
          <div className="w-14 h-14 rounded-full bg-rose-500/10 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400 flex items-center justify-center mb-4 ring-8 ring-rose-500/5">
            <Trash2 className="w-7 h-7" />
          </div>

          {/* Title */}
          <DialogTitle className="text-xl font-bold text-foreground">
            {title}
          </DialogTitle>

          {/* Description */}
          <DialogDescription className="text-sm text-muted-foreground mt-2 px-2 leading-relaxed">
            {description}
          </DialogDescription>

          {/* Item Name Highlight Card */}
          {itemName && (
            <div className="mt-4 w-full bg-muted/60 border border-border/60 rounded-xl p-3 text-xs font-semibold text-foreground truncate max-w-full">
              "{itemName}"
            </div>
          )}
        </div>

        <DialogFooter className="flex flex-col-reverse sm:flex-row gap-2.5 sm:gap-2 mt-6 pt-2">
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
            disabled={isLoading}
            className="w-full sm:w-1/2 rounded-xl h-10 border-border text-muted-foreground hover:text-foreground font-medium"
          >
            {cancelText}
          </Button>
          <Button
            type="button"
            onClick={onConfirm}
            disabled={isLoading}
            className="w-full sm:w-1/2 rounded-xl h-10 bg-rose-600 hover:bg-rose-700 active:bg-rose-800 text-white font-medium shadow-md shadow-rose-600/20 transition-all gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Menghapus...</span>
              </>
            ) : (
              <>
                <Trash2 className="w-4 h-4" />
                <span>{confirmText}</span>
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
