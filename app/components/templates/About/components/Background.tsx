import Particles from "@/app/components/particles"; 

export const Background = () => (
  <>
    <div className="fixed inset-0 bg-gradient-to-tr 
                    from-black via-black/95 
                    via-[#000022] via-[rgba(0,0,102,0.6)] 
                    to-[rgba(0,0,139,0.2)]" />

    <div className="fixed inset-0 -z-30
                    bg-gradient-to-r from-black 
                    via-black/90 via-[rgba(0,0,51,0.5)] 
                    to-[rgba(0,0,102,0.3)]
                    backdrop-blur-xl" />

    <Particles
      className="fixed inset-0 -z-10"
      quantity={1000}
    />
  </>
);