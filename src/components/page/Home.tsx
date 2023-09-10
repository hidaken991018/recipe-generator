"use client"
import { SelectBox } from "@/components/input/SelectBox/SelectBox"
import { TextInput } from "@/components/input/TextInput/TextInput"
import { useForm, SubmitHandler } from "react-hook-form"
import Image from "next/image"
import { CommonButton } from "@/components/Button/CommonButton"
import { useRouter } from "next/navigation"

type Inputs = {
  dish_name: string
  servings: string
  ingredients: string
  remarks: string
}

export const HomeUI = () => {

  const router = useRouter()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    router.push("/recipe")
  }

  let choices: string[] = []
  const max_servings = 6
  for (let i = 1; i <= max_servings; i++) {
    choices.push(`${i}人前`)
  }
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-row-reverse">
        <div className="flex m-[10px] items-center">
          <Image src="/assets/icon_history.png" width={30} height={30} alt="history" />
          <p className="text-darkBrown pb-0">履歴を見る</p>
        </div>
      </div>
      <p className="text-center m-[10px]">作りたいレシピの情報を入力してください。<br />あなたに合ったレシピを作成します。</p>
      {Object.keys(errors).length != 0 && <p className="text-center text-error">入力されていない項目があります。</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-[15px] max-w-[512px]">
          <TextInput label="料理名" placeholder="例：カレー" {...register("dish_name", { required: true })} />
          <SelectBox label="人数" choices={choices} {...register("servings", { required: true })} />
          <TextInput label="レシピ名" placeholder="例：ひき肉、玉ねぎ" {...register("ingredients", { required: true })} />
          <TextInput label="備考" placeholder="例：辛めの味付け" {...register("remarks", { required: true })} />
          <CommonButton text="検索" type="submit" />
        </div>
      </form>
    </div >
  )
}