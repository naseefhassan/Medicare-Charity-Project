import AdminHeader from "./AdminHeader";

function ShowVolunteer() {
  return (
    <>
      <AdminHeader
        title={"Volunteer Profile"}
        Home={"Home"}
        Homeroute={"/admin/adminhome"}
      />
      <div className="flex items-center justify-center w-full h-screen">
        <div className="max-w-xs">
          <div className="py-3 bg-white rounded-lg shadow-xl">
            <div className="p-2 photo-wrapper">
              <img
                className="w-32 h-32 mx-auto rounded-full"
                src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
                alt="John Doe"
              />
            </div>
            <div className="p-2">
              
              <table className="my-3 text-xs">
                <tbody>
                  <tr>
                    <td className="px-2 py-2 font-semibold text-gray-500">
                      Address
                    </td>
                    <td className="px-2 py-2">
                      Chatakpur-3, Dhangadhi Kailali
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 font-semibold text-gray-500">
                      Phone
                    </td>
                    <td className="px-2 py-2">+977 9955221114</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 font-semibold text-gray-500">
                      Email
                    </td>
                    <td className="px-2 py-2">john@example.com</td>
                  </tr>
                </tbody>
              </table>
              <div className="my-3 text-center">
                <a
                  className="text-xs italic font-medium text-indigo-500 hover:underline hover:text-indigo-600"
                  href="#"
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowVolunteer;
