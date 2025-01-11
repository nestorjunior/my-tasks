import TabsComponent from "@/components/Auth/TabsComponent";

export default function Account() {
  return (
    <div className="flex justify-center h-[50vh]">
      <div className="container bg-white max-w-xl p-6 shadow-md rounded-md">
        <TabsComponent />
      </div>
    </div>
  );
}
