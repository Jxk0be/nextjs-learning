import Link from "next/link"

const url = 'https://www.course-api.com/react-tours-project'

type Tour = {
    id: string,
    name: string,
    info: string,
    image: string,
    price: string
}

const fetchTours = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    const response = await fetch(url)
    const data: Tour[] = await response.json()
    return data
}

export default async function ToursPage() {
    const data = await fetchTours()
    
    return (
        <div>
            <h1 className="text-3xl mb-4">
                {data.map((tour) => {
                    return(
                        <Link className="hover:text-blue-600" key={tour.id} href={`/tours/${tour.id}`}>
                            <h2 key={tour.id}>{tour.name}</h2>
                        </Link>
                    )
                })}
            </h1>
        </div>
    )
}
