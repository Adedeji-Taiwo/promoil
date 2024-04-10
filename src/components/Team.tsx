import { w1, w2, w7 } from "../assets/header"



const Team = () => {
    const items = [
      {
        src: w2,
        alt: 'woman',
        title: 'Powered by women',
        description: 'Both in front of and behind the camera'
      },
      {
        src: w1,
        alt: 'man',
        title: 'Real inclusivity',
        description: 'No staged sets'
      },
      {
        src: w7,
        alt: 'woman',
        title: 'Undiluted diversity',
        description: 'No artificial scenarios'
      }
    ];

    
const GridItem = ({ src, alt, title, description }:{ src:string, alt:string, title:string, description:string } ) => (
  <div className="group space-y-4 text-center">
    <div className="mx-auto h-44 w-44 rotate-45 overflow-hidden rounded-[4rem] md:h-32 md:w-32 lg:h-44 lg:w-44">
      <img
        className="mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]"
        src={src}
        alt={alt}
        loading="lazy"
        width="640"
        height="805"
      />
    </div>
    <div className="pt-4">
      <h4 className="text-xl font-medium text-navy">{title}</h4>
      <span className="block text-sm text-gray-500">{description}</span>
    </div>
  </div>
);



  return (
      <div className="mx-auto px-6 md:px-12 bg-gray-50 py-20">
        <div className="grid gap-24 md:grid-cols-3 md:gap-12">
          {items.map((item, index) => (
            <GridItem key={index} {...item} />
          ))}
        </div>
      </div>
  );
};

export default Team;
