import Image from 'next/image'
import avatar from '/public/avatar.png'

export function Header() {
  return (
    <header className="flex flex-col justify-between w-full mt-8">
      <div className="flex  justify-between w-full">
        <div className="flex gap-4">
          <Image src={avatar} alt="" />

          <div>
            <h2 className="font-bold text-base">Cecilia Sassaki</h2>
            <p className="text-xs text-greem-300 flex items-center gap-1">
              <span className="block w-2 h-2 rounded-full bg-greem-300"></span>{' '}
              Online
            </p>
          </div>
        </div>

        <div>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.41145 0.380224C1.1267 0.0954672 0.665012 0.0954672 0.380255 0.380224C0.0954977 0.664982 0.0954977 1.12666 0.380255 1.41142L4.96882 5.99999L0.380255 10.5886C0.0954977 10.8733 0.0954977 11.335 0.380255 11.6198C0.665012 11.9045 1.1267 11.9045 1.41145 11.6198L6.00002 7.03119L10.5886 11.6198C10.8733 11.9045 11.335 11.9045 11.6198 11.6198C11.9045 11.335 11.9045 10.8733 11.6198 10.5886L7.03122 5.99999L11.6198 1.41142C11.9045 1.12666 11.9045 0.664982 11.6198 0.380224C11.335 0.0954672 10.8733 0.0954672 10.5886 0.380224L6.00002 4.96879L1.41145 0.380224Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      <div className="flex justify-center items-center mt-3">
        <p className="text-xs">Hoje 11:30</p>
      </div>
    </header>
  )
}
