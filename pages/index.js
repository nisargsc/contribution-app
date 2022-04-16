export default function Home() {
  return (
    <div className="grid grid-cols-home-1 sm:grid-cols-home-3">
      <div className=""></div>
      <div className="">
        <div className="fullpage-card"></div>
        <div className="title-card"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="donation-card"></div>
          <div className="donation-card"></div>
          <div className="donation-card"></div>
          <div className="donation-card"></div> 
          <div className="donation-card"></div>         
        </div>
      </div>
      <div className=""></div>
    </div>
  )
}