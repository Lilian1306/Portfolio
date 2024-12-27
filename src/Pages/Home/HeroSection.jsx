import image from '../../assets/hero.webp'


export default function HeroSection(){
    return (
        <section className="">
          <div className="">
           <div className="">
            <p className="">Hey, we are ******</p>
            <h1 className="">
                <span className="">Full Stack</span>{' '}
                <br/>
                  Developer          
           </h1>
           <p className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            <br/> Lorem Ipsum is simply dummy text.
           </p>
           </div>
           <button className="">Get In Touch</button>
          </div>
          <div className="">
            <img src={image}  alt=""/>
          </div>
        </section>

    )

}3