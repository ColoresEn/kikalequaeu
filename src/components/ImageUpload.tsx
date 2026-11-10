import React, { useCallback, type ComponentProps } from 'react';
import { CldUploadWidget } from 'next-cloudinary';
import Image from 'next/image';
import { TbPhotoPlus } from 'react-icons/tb';

interface ImageUploadProps {
  onChange: (value: string) => void;
  value: string;
}

type UploadSuccess = NonNullable<
  ComponentProps<typeof CldUploadWidget>["onSuccess"]
>;

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, value }) => {
  const handleUpload = useCallback<UploadSuccess>(
    (result) => {
      const info = result.info;
      if (
        typeof info === "object" &&
        info !== null &&
        "secure_url" in info &&
        typeof info.secure_url === "string"
      ) {
        onChange(info.secure_url);
        return;
      }

      console.error("Cloudinary upload did not return a secure URL.");
    },
    [onChange],
  );

  return (
    <CldUploadWidget
      uploadPreset="ajukal8h"
      options={{ maxFiles: 1 }}
      onSuccess={handleUpload}
    >
      {({ open }) => {
        return (
          <button
            type="button"
            onClick={() => open?.()}
            aria-label="Subir imagen de perfil"
            className="relative flex h-36 w-36 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-full border border-dashed border-border bg-muted/40 text-center transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            <TbPhotoPlus aria-hidden="true" className="size-6" />
            <span className="mt-2 px-3 text-xs">Subir imagen</span>

            {value && (
              <div className="pointer-events-none absolute inset-0">
                <Image
                  alt=""
                  fill
                  sizes="144px"
                  className="object-cover"
                  src={value}
                />
              </div>
            )}
          </button>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUpload;
