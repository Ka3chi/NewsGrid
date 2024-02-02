import featured from '../../assets/home/featured.jpg'

export const Home = () => {
  return (
    <div className="p-5 bg-slate-500">
      <div>
        <div className='container mx-auto'>
          <img src={featured} alt=""  />
        </div>
      </div>
    </div>
  )
}
