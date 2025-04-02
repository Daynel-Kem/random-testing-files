export default function Page() {
    async function submitForm(formData) {
        "use server";
        const formFields = {
            email: formData.get("email"),
            message: formData.get("message")
        };
        console.log("formFields", formFields);
        console.log("TODO: Send these form field values to a backend");
        return formFields
    }
    return (
        <main className="max-w-md mx-auto p-6 bg-gray-50 shadow-md rounded-md">
            <h1 className="test-2xl font-bold text-center mb-6 text-black">
                Contact me at atatatakkkaaakkaka.com
            </h1>
            <form className="space-y-4" action={submitForm}>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input 
                        id="email" 
                        type="email"
                        name="email"
                        required
                        className="border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-1 hover:border-blue-500 text-gray-700"    
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea id="message" required name="message" rows="4" cols="43" className="hover:border-blue-500 border-1 text-gray-700 border-gray-300"></textarea>
                </div>
                <button type="submit" className="block text-sm font-medium text-gray-700 border-gray-300 hover:border-blue-500 border-1 p-2 rounded-sm focus:bg-blue-500">
                    Send Message
                </button>
            </form>
        </main>
    )
}