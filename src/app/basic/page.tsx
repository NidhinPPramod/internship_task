import Button from "@/components/Header/Button/Button";
import RoundedButton from "@/components/Header/RoundedButton/RoundedButton";
import Card from "@/components/Header/Card/Card";

export default function Home() {
    return (
        <div className="flex min-h-screen pt-12 flex-col text-white justify-around">
            <div className="flex">
                <div className="w-60 h-60 flex flex-col items-center">
                    <Button filled>POST</Button>
                    <Button outlined>POST</Button>
                    <Button nonfilled>POST</Button>
                </div>
                <div className="w-60 h-60">   
                    <RoundedButton filled>Yesterday</RoundedButton>
                </div>
            </div>
            <div className="mx-8 flex flex-col gap-5 text-sm">
                <Card/>
            </div>
        </div>
    );
}
