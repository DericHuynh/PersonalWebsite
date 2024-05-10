import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

export const contacts = [
  {id:0, mailto:true, method: "Email (Primary)", contact: "huynhderic@gmail.com"},
  {id:1, mailto:true, method: "Email (Secondary)", contact: "huynhdericpersonal@gmail.com"},
  {id:2, mailto:false, method: "Mobile Phone (Primary)", contact: "(780) 699-5862"},
  {id:3, mailto:false, method: "Mobile Phone (Secondary)", contact: "(825) 522-1441"}
]

export default function Home() {
  return (
    <main className="w-full flex flex-col bg-blue-900">
      <h1 className="mx-auto text-center text-2xl  sticky top-0 pb-1 bg-gray-900 w-full border-b-2 pr-1 border-gray-800">Contacts</h1>
      <div className="flex mx-auto max-w-fit flex-col gap-2 p-2 overflow-y-auto grow">
        <table>
          <thead>
            <tr className="border-2 bg-white/10 border-white/15">
              <th className="border-2 rounded-md border-white/15">Method</th>
              <th className="border-2 rounded-md border-white/15">Contact</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(function(contact) {
              return (
                <tr className="border-2 bg-white/10 border-white/15" key={contact.id}>
                  <td className="px-2 border-2 border-white/15">{contact.method}</td>
                  <td className="px-2 border-2 border-white/15">{contact.mailto ? (<a className="text-blue-300" href={"mailto:" + contact.contact}>{contact.contact}</a>) : (contact.contact)}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
}
