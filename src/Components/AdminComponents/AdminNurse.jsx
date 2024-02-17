import AdminHeader from "./AdminHeader";

function AdminNurse() {
  return (
    <>
      <div>
        <AdminHeader />
        <div className="">
          <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
              <h1 className="mb-4 text-2xl font-bold text-center tc">
                Add Nurse
              </h1>

              <form>
                <label
                  className="block mb-1 text-sm font-medium text-gray-600"
                  htmlFor="name"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="username"
                  required
                  className="w-full px-4 py-2 mb-4 border rounded-md"
                />

                <label
                  className="block mb-1 text-sm font-medium text-gray-600"
                  htmlFor="gender"
                >
                  Gender:
                </label>
                <select
                  id="gender"
                  name="gender"
                  required
                  className="w-full px-4 py-2 mb-4 border rounded-md"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>

                <label
                  className="block mb-1 text-sm font-medium text-gray-600"
                  htmlFor="age"
                >
                  Age:
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  required
                  className="w-full px-4 py-2 mb-4 border rounded-md"
                />

                <label
                  className="block mb-1 text-sm font-medium text-gray-600"
                  htmlFor="phoneNumber"
                >
                  Phone Number:
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  required
                  className="w-full px-4 py-2 mb-4 border rounded-md"
                />
                <label
                  className="block mb-1 text-sm font-medium text-gray-600"
                  htmlFor="Experience"
                >
                  Experience:
                </label>
                <input
                  type="text"
                  id="Experience"
                  name="Experience"
                  required
                  className="w-full px-4 py-2 mb-4 border rounded-md"
                />

<label
                  className="block mb-1 text-sm font-medium text-gray-600"
                  htmlFor="Image"
                >
                  Image:
                </label>
                <input
                  type="file"
                  id="Image"
                  name="Image"
                  required
                  className="w-full px-4 py-2 mb-4 border rounded-md"
                />

                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-700"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminNurse;
