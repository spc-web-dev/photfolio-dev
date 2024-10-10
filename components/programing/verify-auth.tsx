"use client";
import Image from "next/image";
import imageUrl from "@/app/fonts/images/image-p1.jpg";
import { Button } from "../ui/button";
import { useEffect, useRef, useState } from "react";
import { createSwapy } from "swapy";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hook";
import { setVerifyAuth } from "@/lib/redux/features/auth-slice";
import { useRouter } from "next/navigation";

type arrT = {
  slotId: string | null;
  itemId: string | null;
};

const VerifyAuth = () => {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const swapyRef = useRef<any>(null);
  const [startGame, setStartGame] = useState(false);
  const [dataArr, setDataArr] = useState<arrT[]>();
  const [error, setError] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter()
  const {auth} = useAppSelector(state=>state.auth) 

  const shuffleItems = (items: HTMLCollection) => {
    const shuffledArray = Array.from(items);
    shuffledArray.sort(() => Math.random() - 0.5);
    return shuffledArray;
  };

  const handleVerify = () => {
    if (dataArr?.length) {
      const err: boolean = dataArr.some((value, index) => {
        if (Number(value.itemId) != Number(index) + 1) return true;
      });
      setError(err);
      dispatch(setVerifyAuth(!err));
      if(auth) router.push('/programing')
    }
  };

  const handleRendom = () => {
    setStartGame(true);
    if (gridRef.current) {
      if (swapyRef.current) {
        swapyRef.current.destroy();
      }
      const shuffledItems = shuffleItems(gridRef.current.children);
      const shuffledHTML = Array.from(shuffledItems)
        .map((item) => item.outerHTML)
        .join("");
      gridRef.current.innerHTML = shuffledHTML;

      swapyRef.current = createSwapy(gridRef.current, {
        swapMode: "hover",
      });
    }
  };

  useEffect(() => {
      const container = gridRef.current;
      const swapy = createSwapy(container, {
        swapMode: "hover",
      });
      swapy.onSwapEnd(({ data, hasChanged }) => {
        if (hasChanged) {
          setDataArr(data.array);
          setError(false);
        }
      });

      swapy.onSwapStart(() => {});
      return () => {
        swapy.destroy();
      };
  }, [gridRef.current?.children]);

  return (
    <div className="w-full h-full flex flex-col items-center gap-5">
      <div className="w-full text-center flex items-center justify-center flex-col gap-5">
        <h1 className="max-w-xl">
          look at the phicture, click on random button and fix the position of
          the phicture and then click verify to go to next step.
        </h1>
        <div className="space-x-2">
          <Button
            variant={"secondary"}
            onClick={handleRendom}
            disabled={startGame ? true : false}
          >
            Random
          </Button>
          <Button
            variant={"secondary"}
            disabled={startGame ? false : true}
            className="bg-green-400 text-white hover:bg-green-500"
            onClick={handleVerify}
          >
            Verify
          </Button>
        </div>
      </div>
      <div
        className="grid grid-cols-3 grid-rows-3 gap-2 max-w-xl max-h-[500px] mx-auto w-full h-screen"
        ref={gridRef}
      >
        <div className=" relative" data-item="1" data-swapy-slot="1">
          <div
            className="relative overflow-hidden aspect-w-1 aspect-h-1 w-full h-full"
            data-swapy-item="1"
          >
            <Image
              src={imageUrl}
              className="absolute inset-0 min-w-[300%] min-h-[300%] object-cover translate-x-0 translate-y-0"
              alt="Galaxy"
            />
          </div>
        </div>
        <div className=" relative" data-item="2" data-swapy-slot="2">
          <div
            className="relative overflow-hidden aspect-w-1 aspect-h-1 w-full h-full"
            data-swapy-item="2"
          >
            <Image
              src={imageUrl}
              className="absolute inset-0 min-w-[300%] min-h-[300%] object-cover translate-x-[-33.33%] translate-y-0"
              alt="Galaxy"
            />
          </div>
        </div>
        <div className=" relative" data-item="3" data-swapy-slot="3">
          <div
            className="relative overflow-hidden aspect-w-1 aspect-h-1 w-full h-full"
            data-swapy-item="3"
          >
            <Image
              src={imageUrl}
              className="absolute inset-0 min-w-[300%] min-h-[300%] object-cover translate-x-[-66.66%] translate-y-0"
              alt="Galaxy"
            />
          </div>
        </div>

        <div className=" relative" data-item="4" data-swapy-slot="4">
          <div
            className="relative overflow-hidden aspect-w-1 aspect-h-1 w-full h-full"
            data-swapy-item="4"
          >
            <Image
              src={imageUrl}
              className="absolute inset-0 min-w-[300%] min-h-[300%] object-cover translate-x-0 translate-y-[-33.33%]"
              alt="Galaxy"
            />
          </div>
        </div>
        <div className=" relative" data-item="5" data-swapy-slot="5">
          <div
            className="relative overflow-hidden aspect-w-1 aspect-h-1 w-full h-full"
            data-swapy-item="5"
          >
            <Image
              src={imageUrl}
              className="absolute inset-0 min-w-[300%] min-h-[300%] object-cover translate-x-[-33.33%] translate-y-[-33.33%]"
              alt="Galaxy"
            />
          </div>
        </div>
        <div className=" relative" data-item="6" data-swapy-slot="6">
          <div
            className="relative overflow-hidden aspect-w-1 aspect-h-1 w-full h-full"
            data-swapy-item="6"
          >
            <Image
              src={imageUrl}
              className="absolute inset-0 min-w-[300%] min-h-[300%] object-cover translate-x-[-66.66%] translate-y-[-33.33%]"
              alt="Galaxy"
            />
          </div>
        </div>

        <div className=" relative" data-item="7" data-swapy-slot="7">
          <div
            className="relative overflow-hidden aspect-w-1 aspect-h-1 w-full h-full"
            data-swapy-item="7"
          >
            <Image
              src={imageUrl}
              className="absolute inset-0 min-w-[300%] min-h-[300%] object-cover translate-x-0 translate-y-[-66.66%]"
              alt="Galaxy"
            />
          </div>
        </div>
        <div className=" relative" data-item="8" data-swapy-slot="8">
          <div
            className="relative overflow-hidden aspect-w-1 aspect-h-1 w-full h-full"
            data-swapy-item="8"
          >
            <Image
              src={imageUrl}
              className="absolute inset-0 min-w-[300%] min-h-[300%] object-cover translate-x-[-33.33%] translate-y-[-66.66%]"
              alt="Galaxy"
            />
          </div>
        </div>
        <div className=" relative" data-item="9" data-swapy-slot="9">
          <div
            className="relative overflow-hidden aspect-w-1 aspect-h-1 w-full h-full"
            data-swapy-item="9"
          >
            <Image
              src={imageUrl}
              className="absolute inset-0 min-w-[300%] min-h-[300%] object-cover translate-x-[-66.66%] translate-y-[-66.66%]"
              alt="Galaxy"
            />
          </div>
        </div>
      </div>
      <div>
        {error && (
          <p className="text-red-400">
            Not currect, please fix position of the phicture again!
          </p>
        )}
      </div>
    </div>
  );
};

export default VerifyAuth;
