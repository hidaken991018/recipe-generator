import { SelectBox } from "@/components/input/SelectBox/SelectBox"
import { TextInput } from "@/components/input/TextInput/TextInput"
import Image from "next/image"

export const HomeUI = () => {

  let choices: string[] = []
  for (let i = 1; i <= 6; i++) {
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
      <div className="flex flex-col gap-[15px] max-w-[512px]">
        <TextInput label="料理名やジャンル" placeholder="例：カレー" />
        <SelectBox label="人数" choices={choices} />
        <TextInput label="レシピ名" placeholder="例：ひき肉、玉ねぎ" />
        <TextInput label="備考" placeholder="例：辛めの味付け" />
      </div>
    </div >
  )
}