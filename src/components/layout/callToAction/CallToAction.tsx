import Image from "next/image";
import React, { useState, useCallback, useRef, useEffect } from "react";

const CallToAction = () => {
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

  const propertyTypes = ["Todos os tipos", "Casa", "Apartamento", "Comercial"];

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
    <section className="relative grid h-[40rem] w-full grid-rows-2 place-items-center items-center justify-items-center bg-[url(/images/main-banner-desktop.png)] bg-cover bg-right bg-no-repeat py-4">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-[2.125rem] text-white">Vende. Aluga. Conecta</h2>
        <div
          id="searchContainer"
          className={`mt-8 grid h-[4.875rem] grid-cols-5 grid-rows-[4.875rem_auto] gap-y-2 rounded-full bg-white transition-all duration-700 ease-in-out ${
            locationFocus || showLocationResults || showRoomResults
              ? "max-w-[62.5rem]"
              : "max-w-[48.125rem]"
          }`}
        >
          <div
            className={`relative col-span-3 flex flex-col justify-center rounded-full bg-white pl-8 pr-4 duration-100 ease-linear ${
              locationFocus
                ? "z-[1] shadow-[10px_4px_13px_2px_rgba(0,_0,_0,_0.1)]"
                : "hover:bg-[#EDF1F4]"
            }`}
            onClick={() => locationInputRef.current?.focus()}
          >
            <label htmlFor="locationInput" className="flex items-center">
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
          <div
            className={`col-span-2 grid grid-cols-3 grid-rows-2 justify-center rounded-full pl-8 ${
              locationFocus || showLocationResults || showRoomResults
                ? "pr-2"
                : ""
            } bg-white duration-100 ease-linear ${
              roomFocus
                ? "z-[2] shadow-[-10px_4px_13px_2px_rgba(0,_0,_0,_0.1)]"
                : "hover:bg-[#EDF1F4]"
            }`}
            onClick={() => roomInputRef.current?.focus()}
          >
            <label
              htmlFor="roomsInput"
              className="col-span-2 flex items-center self-end"
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
              className="col-span-2 self-start truncate bg-transparent outline-none"
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
            <button className="col-3/4 row-1/3 flex h-[58px] items-center gap-1 self-center justify-self-center rounded-full bg-orange-500 p-4 text-white duration-100 ease-linear hover:bg-orange-600">
              <Image
                src="/search.svg"
                alt="Buscar"
                width={24}
                height={24}
                onClick={(event) => {
                  event.stopPropagation();
                }}
              />
              <span
                className={`transition-all duration-500 ease-in-out ${
                  locationFocus || showLocationResults || showRoomResults
                    ? "max-w-20 opacity-100"
                    : "max-w-0 overflow-hidden opacity-0"
                }`}
              >
                Buscar
              </span>
            </button>
          </div>
          <div className="col-span-5 grid grid-cols-5">
            {showLocationResults && (
              <div
                ref={locationDropdownRef}
                className="col-[1/3] max-w-[18.875rem] self-start overflow-hidden rounded-2xl bg-white shadow-lg"
              >
                <span className="block w-full py-3 text-center text-sm text-[#A1A7AA]">
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
            {showRoomResults && (
              <div
                ref={roomDropdownRef}
                className="col-[4/6] min-w-fit self-start rounded-2xl bg-white px-6 pb-6 pt-4 shadow-lg"
              >
                <span className="block w-full pb-3 text-sm text-[#393B3D]">
                  Número de Quartos
                </span>
                <ul className="flex justify-between gap-3 border-b border-[#E1E5E9] pb-6">
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
                <div className="relative ml-2">
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
