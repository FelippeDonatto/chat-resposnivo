interface MsgLeftProps {
  info: string
  text: string
}

export function MsgLeft({ info, text }: MsgLeftProps) {
  return (
    <div className="flex w-full">
      <div className="flex flex-col justify-start gap-3 mt-8">
        <div>
          <p className="text-xs">{info}</p>
        </div>
        <div>
          <div className="bg-violet-500 p-4 rounded-tl-none rounded-lg">
            <p className="text-xs">{text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
