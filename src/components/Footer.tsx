export const Footer = () => (
  <footer className="max-w-7xl mx-auto px-4 py-12">
    <div className="grid grid-cols-1 md:grid-cols-3 border-y-2 border-gray-300">
      <div className="mb-8">
        <img src="/logo.svg" className="w-14 my-4" alt="logo-image" />
        <p className="mb-6">
          Albatech act as a corporate partner to help digitize their business to
          accelerate trends in remote work
        </p>

        <div className="flex">
          <img src="/facebook.svg" className="mr-2" alt="facebook-icon" />
          <img src="/instagram.svg" className="mr-2" alt="instagram-icon" />
          <img src="/linkedin.svg" className="mr-2" alt="linkedin-icon" />
        </div>
      </div>

      <div className="md:pl-12 mb-8">
        <h3 className="font-semibold mb-2 mt-4">Website</h3>
        <ul>
          <li>
            <a href="/">Service</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Portfolio</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Career</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="font-semibold mb-2 mt-4">Contact</h3>
        <p className="mb-4">
          The Prominence Blok 38D No.25 Jl. Jalur Sutera Barat, Alam Sutera,
          Kota Tangerang, Banten 15143
        </p>
        <p>
          <b className="mr-2">P :</b> +62 81 1889 3383
        </p>
        <p>
          <b className="mr-2">E :</b> info@albatech.id
        </p>
      </div>
    </div>

    <div className="flex flex-col sm:flex-row justify-between pt-4 text-gray-500">
      <p className="mb-2">
        &copy;PT Alba Digital Teknologi 2021 | All Rights Reserved
      </p>
      <p>Privacy policy | Terms of service</p>
    </div>
  </footer>
)
