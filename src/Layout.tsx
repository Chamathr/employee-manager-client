import Navbar from './components/navbar/Navbar'
 
export default function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}