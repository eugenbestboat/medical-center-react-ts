function Logo() {
  return (
    <div className="flex justify-center items-center">
    <div className="w-10 h-10">
        <svg fill="#0cb8b6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5,22H19a3,3,0,0,0,3-3V5a3,3,0,0,0-3-3H5A3,3,0,0,0,2,5V19A3,3,0,0,0,5,22Zm14-2H5a1,1,0,0,1-1-1V13H8a1,1,0,0,0,.928-.628L10,9.692l3.071,7.68a1,1,0,0,0,1.858,0L16.677,13H20v6A1,1,0,0,1,19,20ZM5,4H19a1,1,0,0,1,1,1v6H16a1,1,0,0,0-.929.629L14,14.307,10.929,6.628a1,1,0,0,0-1.857,0L7.323,11H4V5A1,1,0,0,1,5,4Z"/></svg>
    </div>
      <div className="text-base text-primary font-bold">Medical Center</div>
    </div>
  )
}

export default Logo;