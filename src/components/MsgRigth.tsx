interface MsgRigthProps {
  info: string
  text: string
}

export function MsgRigth({ info, text }: MsgRigthProps) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col items-end gap-3 mt-8">
        <div>
          <p className="text-xs">{info}</p>
        </div>
        <div>
          <div className="bg-greem-500 p-4 rounded-br-none rounded-lg">
            <p className="text-xs">{text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
