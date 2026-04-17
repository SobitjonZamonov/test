import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";


const HomePage = () => {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
                <Card key={i}>
                    <CardHeader>
                        <CardTitle>Card {i + 1}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        Some content
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}

export default HomePage;