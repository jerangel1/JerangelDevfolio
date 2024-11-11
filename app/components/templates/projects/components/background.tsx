import Particles from "@/app/components/particles";

export default function Background() {
    return (
        <div className="fixed inset-0 z-0 bg-black">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black" />
            <Particles className="absolute inset-0" />
        </div>
    );
}