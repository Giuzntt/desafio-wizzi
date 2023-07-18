"use client";
import { LucideStar, LucideTimer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CardSearchProps {
  price: string;
  location: string;
  level?: string;
  src?: string;
  time?: string;
  to?: string;
}

export default function CardSearch({
  price = "0",
  location = "Desconhecida",
  level = "Iniciante",
  src = "/images/default-placeholder.png",
  time = "0",
  to = "/",
}: CardSearchProps) {
  return (
    <Link
      href={to}
      className="block rounded-lg p-4 shadow-sm shadow-indigo-100"
    >
      <Image
        alt="Home"
        src={src}
        className="h-56 w-full rounded-md object-cover"
        width={1770}
        height={1180}
        loading="lazy"
      />

      <div className="mt-2">
        <dl>
          <div>
            <dt className="sr-only">Valor</dt>
            <dd className="text-sm text-gray-500">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(Number(price))}
            </dd>
          </div>

          <div>
            <dt className="sr-only">Endereço</dt>
            <dd className="font-medium">{location}</dd>
          </div>
        </dl>

        <div className="mt-6 flex items-center gap-8 text-xs">
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <svg
              className="h-4 w-4 text-blue-nav"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {/* SVG path content */}
            </svg>

            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Nível</p>
              <p className="font-medium">{level}</p>
            </div>
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <LucideTimer className="h-4 w-4 text-blue-nav" />
            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Tempo</p>
              <p className="font-medium">{time} meses</p>
            </div>
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <LucideStar className="h-4 w-4 text-blue-nav" />
            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Avaliação</p>
              <p className="font-medium">5</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
