import { useRouter } from "next/router";

// const DetailPage = () => {
//   return (
//     <div><h1>Detail Pages</h1></div>
//   )
// }

// export default  DetailPage

export default function DetailPage() {
  const router = useRouter();
  const newsId = router.query.newId;
  console.log(router.query.newsId);
  return (
    <div>
      <h1>DetailPage</h1>
    </div>
  );
}
