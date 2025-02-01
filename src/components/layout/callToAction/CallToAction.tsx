import Image from "next/image";
import React, { useState, useCallback, useRef, useEffect } from "react";

interface Props {
  isMobile: boolean;
}

const CallToAction: React.FC<Props> = ({ isMobile }) => {
  // Input de localização
  const [locationFocus, setLocationFocus] = useState(false);
  const [searchLocation, setSearchLocation] = useState("");
  const [showLocationResults, setShowLocationResults] = useState(false);
  const locationInputRef = useRef<HTMLInputElement>(null);
  const locationDropdownRef = useRef<HTMLDivElement>(null);

  const LocationInputFocus = useCallback(() => {
    setLocationFocus(true);
    const locationInput = locationInputRef.current;
    if (locationInput && locationInput.value.length > 0) {
      setShowLocationResults(true);
    }
    if (searchLocation) {
      setShowLocationResults(true);
    }
  }, [searchLocation]);
  const LocationInputBlur = () => {
    setLocationFocus(false);
    if (locationInputRef.current)
      locationInputRef.current.setSelectionRange(0, 0);
  };

  const LocationInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchLocation(event.target.value);
    setShowLocationResults(event.target.value.length > 0);
  };

  const LocationSelect = useCallback(
    (event: React.MouseEvent<HTMLLIElement>) => {
      const result = event.currentTarget.querySelector("address span");
      if (result) {
        setSearchLocation(result.textContent || "");
        setShowLocationResults(false);
      }
    },
    [],
  );

  const addresses = [
    {
      street: "Av. José Faria da Rocha",
      neighborhood_city: "Eldorado, Contagem - MG",
    },
    {
      street: "Rua José Faria de Barros",
      neighborhood_city: "Parque imperial, Salto - MG",
    },
    {
      street: "Rua José Faria de Almeida",
      neighborhood_city: "Jardim das Palmeiras, Boituva - MG",
    },
    {
      street: "Rua José Faria de Carvalho",
      neighborhood_city: "Exemplo de texto sobresalente, Pouso Alegre - MG",
    },
    {
      street: "Avenida José Maria de Faria",
      neighborhood_city: "Lapa de Baixo, São Paulo - SP",
    },
  ];

  // Input de número de quartos
  const [roomFocus, setRoomFocus] = useState(false);
  const [searchRoom, setSearchRoom] = useState("");
  const [showRoomResults, setShowRoomResults] = useState(false);
  const roomInputRef = useRef<HTMLInputElement>(null);
  const roomDropdownRef = useRef<HTMLDivElement>(null);

  const RoomInputFocus = useCallback(() => {
    setRoomFocus(true);
    setShowRoomResults(true);
  }, []);
  const RoomInputBlur = () => {
    setRoomFocus(false);
  };

  const RoomSelect = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const result = event.currentTarget.value;
      setSearchRoom(result || "");
    },
    [],
  );

  // Tipos de propriedade

  const [propertiesDropdown, setPropertiesDropdown] = useState(false);
  const [selectedPropertyType, setSelectedPropertyType] =
    useState("Todos os tipos");
  const propertiesDropdownRef = useRef<HTMLUListElement>(null);

  const toggleDropdown = () => {
    setPropertiesDropdown(!propertiesDropdown);
  };

  const placeChange = (event: string) => {
    setSelectedPropertyType(event);
    setPropertiesDropdown(false);
  };

  const propertyTypes = [
    "Todos os tipos",
    "Casa",
    "Apartamento",
    "Terrenos",
    "Lojas",
    "Prédio comercial",
    "Galpão de Armazenamento",
    "Salão de Eventos",
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        locationDropdownRef.current &&
        !locationDropdownRef.current.contains(event.target as Node)
      ) {
        setShowLocationResults(false);
        removeFocus();
      }
      if (
        roomDropdownRef.current &&
        !roomDropdownRef.current.contains(event.target as Node)
      ) {
        setShowRoomResults(false);
        removeFocus();
      }
      if (
        propertiesDropdownRef.current &&
        !propertiesDropdownRef.current.contains(event.target as Node)
      ) {
        setPropertiesDropdown(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowLocationResults(false);
        setShowRoomResults(false);
        setPropertiesDropdown(false);
        removeFocus();
      }
    };

    const removeFocus = () => {
      const locationInput = locationInputRef.current;
      if (locationInput) {
        locationInput.blur();
      }
      const roomInput = roomInputRef.current;
      if (roomInput) {
        roomInput.blur();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section className="relative w-full bg-cover bg-right bg-no-repeat md:grid md:h-[40rem] md:grid-rows-2 md:place-items-center md:items-center md:justify-items-center md:bg-[url(/images/main-banner-desktop.png)] md:py-4">
      <div className="flex flex-col items-center justify-center">
        <div className="flex aspect-video w-full items-center justify-start bg-[url(/images/main-banner-mobile.png)] bg-cover bg-[66%] py-10 pl-16 md:block md:aspect-auto md:w-auto md:bg-none md:p-0">
          <h2 className="text-[2.125rem] font-bold text-white">
            Vende.
            <br className="md:hidden" /> Aluga.
            <br className="md:hidden" /> Conecta.
          </h2>
        </div>
        <div
          id="searchContainer"
          className={`grid w-full gap-y-4 bg-white pt-8 transition-all duration-700 ease-in-out md:mt-8 md:h-[4.875rem] md:w-auto md:grid-cols-5 md:rounded-full md:pt-0 ${
            locationFocus || showLocationResults || showRoomResults
              ? "md:max-w-[62.5rem]"
              : "md:max-w-[48.125rem]"
          }`}
        >
          <div
            className={`relative flex flex-col justify-center rounded-full bg-white px-4 duration-100 ease-linear md:col-span-3 md:pl-8 ${
              locationFocus
                ? "z-[1] md:shadow-[10px_4px_13px_2px_rgba(0,_0,_0,_0.1)]"
                : "md:hover:bg-[#EDF1F4]"
            }`}
            onClick={() => locationInputRef.current?.focus()}
          >
            <div className="flex flex-col gap-y-1 rounded-[10px] border border-[#E1E5E9] px-6 py-4 md:rounded-none md:border-none md:p-0">
              <label
                htmlFor="locationInput"
                className="flex items-center text-sm font-bold"
              >
                <Image
                  src="/location.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="mr-2 inline-block"
                />
                Localização
              </label>
              <input
                id="locationInput"
                ref={locationInputRef}
                type="text"
                placeholder="Qual é a Localização?"
                className="truncate bg-transparent outline-none"
                value={searchLocation}
                onFocus={LocationInputFocus}
                onBlur={LocationInputBlur}
                onChange={LocationInputChange}
              />
            </div>
            {showLocationResults && (
              <div
                ref={locationDropdownRef}
                className="absolute left-4 right-4 top-[90px] z-40 self-start rounded-2xl bg-white shadow-lg md:left-auto md:right-auto md:top-[5.375rem] md:max-w-[18.875rem]"
              >
                <span className="block w-full px-6 py-3 text-center text-sm text-[#A1A7AA]">
                  Busque por cidade, região, bairro ou código
                </span>
                <ul>
                  {addresses.map((address, index) => (
                    <li
                      key={index}
                      className="cursor-pointer p-3 hover:bg-[#F4F6F9]"
                      onClick={LocationSelect}
                    >
                      <address className="grid w-full grid-cols-[auto_1fr] items-center gap-x-2 not-italic">
                        <Image
                          src="/location-dark.svg"
                          alt=""
                          width={16}
                          height={16}
                        />
                        <span className="text-sm text-[#393B3D]">
                          {address.street}
                        </span>
                        <small className="col-[2/3] max-w-[30ch] text-xs text-[#4E5254]">
                          {address.neighborhood_city}
                        </small>
                      </address>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div
            className={`relative flex flex-col gap-y-6 rounded-full px-4 md:col-span-2 md:grid md:grid-cols-3 md:grid-rows-2 md:items-center md:justify-center md:gap-y-0 md:pl-8 ${
              locationFocus || showLocationResults || showRoomResults
                ? "md:pr-2"
                : ""
            } bg-white duration-100 ease-linear ${
              roomFocus
                ? "z-[2] md:shadow-[-10px_4px_13px_2px_rgba(0,_0,_0,_0.1)]"
                : "md:hover:bg-[#EDF1F4]"
            }`}
            onClick={() => roomInputRef.current?.focus()}
          >
            <div className="flex flex-col gap-y-1 rounded-[10px] border border-[#E1E5E9] px-6 py-4 md:col-span-2 md:row-span-2 md:rounded-none md:border-none md:p-0">
              <label
                htmlFor="roomsInput"
                className="flex items-center text-sm font-bold"
              >
                <Image
                  src="/bed.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="mr-2 inline-block"
                />
                Nº de Quartos
              </label>
              <input
                id="roomsInput"
                ref={roomInputRef}
                type="number"
                placeholder="Quantos Quartos?"
                className="self-start truncate bg-transparent outline-none"
                value={searchRoom}
                onFocus={RoomInputFocus}
                onBlur={RoomInputBlur}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setSearchRoom(event.target.value)
                }
                onKeyPress={(event: React.KeyboardEvent<HTMLInputElement>) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </div>
            <button
              className="flex h-[58px] items-center justify-center gap-1 rounded-[10px] bg-orange-600 p-4 font-semibold text-white duration-100 ease-linear md:col-3/4 md:row-1/3 md:justify-self-end md:rounded-full md:bg-orange-500 md:font-bold md:hover:bg-orange-600"
              onClick={(event) => {
                event.stopPropagation();
              }}
            >
              <Image src="/search.svg" alt="Buscar" width={24} height={24} />
              {isMobile ? (
                <span>Buscar Imóveis</span>
              ) : (
                <span
                  className={`transition-all duration-500 ease-in-out ${
                    locationFocus || showLocationResults || showRoomResults
                      ? "max-w-20 opacity-100"
                      : "max-w-0 overflow-hidden opacity-0"
                  }`}
                >
                  Buscar
                </span>
              )}
            </button>
            {showRoomResults && (
              <div
                ref={roomDropdownRef}
                className="absolute left-4 right-4 top-[90px] z-40 self-start rounded-2xl bg-white px-6 pb-6 pt-4 shadow-lg md:left-auto md:right-auto md:top-[5.375rem]"
              >
                <span className="block w-full pb-3 text-sm text-[#393B3D]">
                  Número de Quartos
                </span>
                <ul className="flex flex-wrap justify-center gap-3 border-b border-[#E1E5E9] pb-6 md:flex-nowrap md:justify-between">
                  <li>
                    <button
                      className={`rounded-full border px-4 py-3 text-sm font-semibold ${
                        searchRoom === ""
                          ? "border-purple-800 bg-[#F7F4F9] text-purple-800"
                          : "border-[#D9D9D9] text-[#555555]"
                      }`}
                      onClick={RoomSelect}
                      value={""}
                    >
                      Todos
                    </button>
                  </li>
                  <li>
                    <button
                      className={`rounded-full border px-4 py-3 text-sm font-semibold ${
                        searchRoom === "1"
                          ? "border-purple-800 bg-[#F7F4F9] text-purple-800"
                          : "border-[#D9D9D9] text-[#555555]"
                      }`}
                      onClick={RoomSelect}
                      value={1}
                    >
                      1+
                    </button>
                  </li>
                  <li>
                    <button
                      className={`rounded-full border px-4 py-3 text-sm font-semibold ${
                        searchRoom === "2"
                          ? "border-purple-800 bg-[#F7F4F9] text-purple-800"
                          : "border-[#D9D9D9] text-[#555555]"
                      }`}
                      onClick={RoomSelect}
                      value={2}
                    >
                      2+
                    </button>
                  </li>
                  <li>
                    <button
                      className={`rounded-full border px-4 py-3 text-sm font-semibold ${
                        searchRoom === "3"
                          ? "border-purple-800 bg-[#F7F4F9] text-purple-800"
                          : "border-[#D9D9D9] text-[#555555]"
                      }`}
                      onClick={RoomSelect}
                      value={3}
                    >
                      3+
                    </button>
                  </li>
                  <li>
                    <button
                      className={`rounded-full border px-4 py-3 text-sm font-semibold ${
                        searchRoom === "4"
                          ? "border-purple-800 bg-[#F7F4F9] text-purple-800"
                          : "border-[#D9D9D9] text-[#555555]"
                      }`}
                      onClick={RoomSelect}
                      value={4}
                    >
                      4+
                    </button>
                  </li>
                </ul>
                <span className="mt-6 block w-full pb-3 text-sm text-[#393B3D]">
                  Tipo de Propriedade
                </span>
                <div className="relative">
                  <button
                    className="flex w-full justify-between rounded-lg border border-[#D0D5D8] px-3 py-[0.625rem] text-[#4E5254]"
                    onClick={toggleDropdown}
                  >
                    {selectedPropertyType}
                    <Image
                      src="/down-arrow.svg"
                      alt=""
                      width={16}
                      height={16}
                      className="inline-block"
                    />
                  </button>
                  {propertiesDropdown && (
                    <ul
                      ref={propertiesDropdownRef}
                      className="absolute top-12 z-10 w-full overflow-hidden whitespace-nowrap rounded-2xl bg-white shadow-xl"
                    >
                      {propertyTypes.map((type, index) => (
                        <li
                          key={index}
                          onClick={() => placeChange(type)}
                          className="cursor-pointer p-2 hover:bg-gray-100"
                        >
                          {type}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
