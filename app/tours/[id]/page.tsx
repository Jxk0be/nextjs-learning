export default function page({ params }: { params: {id: string}}) {
  return (
    <div>
        <h1 className="text-3xl font-semibold">ID: {params.id}</h1>
    </div>
  )
}
