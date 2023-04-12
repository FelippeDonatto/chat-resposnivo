import { Header } from '@/components/Header'
import { TextInput } from '@/components/TextInput'
import { MsgLeft } from '@/components/MsgLeft'
import { MsgRigth } from '@/components/MsgRigth'

export default function Home() {
  return (
    <>
      <Header />
      <MsgLeft
        info="Cecilia - 11:30"
        text="Tive uma ideia incrível para um projeto! 😍"
      />
      <MsgRigth info="Você - 11:32" text="Sério? Me conta mais." />

      <MsgLeft
        info="Cecilia - 11:34"
        text="E se a gente fizesse um chat moderno e responsivo em apenas uma semana?"
      />

      <MsgRigth info="Você - 11:36" text="#boraCodar! 🚀" />

      <TextInput.Root>
        <TextInput.Input placeholder="Digite sua mensagem" />
      </TextInput.Root>
    </>
  )
}
