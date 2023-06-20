import { ChangeEvent } from 'react'

export const handleImageUpload = (
  event: ChangeEvent<HTMLInputElement>,
  setSelectedImage: (a: string | null) => void,
) => {
  const file = event.target.files?.[0]
  const reader = new FileReader()

  reader.onloadend = () => {
    setSelectedImage(reader.result as string)
  }

  if (file) {
    reader.readAsDataURL(file)
  }
}
