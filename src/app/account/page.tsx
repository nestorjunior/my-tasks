import * as Tabs from "@radix-ui/react-tabs";

export default function Account() {
  return (
    <>
      <div className="flex justify-center h-[50vh]">
        <div className="container bg-white max-w-xl p-6 shadow-md rounded-md">
          <Tabs.Root className="flex flex-col" defaultValue="tab1">
            {/* Lista de abas */}
            <Tabs.List className="flex flex-row justify-between">
              <Tabs.Trigger
                value="tab1"
                className="basis-1/2 border border-gray-200 bg-gray-100 p-4 rounded-md hover:bg-[#3183FF] hover:text-white focus:text-white focus:bg-[#3183FF] text-sm font-medium data-[state=active]:bg-[#3183FF] data-[state=active]:text-white transition-colors duration-300 ease-in-out mr-1"
              >
                Login
              </Tabs.Trigger>
              <Tabs.Trigger
                value="tab2"
                className="basis-1/2 border border-gray-200 bg-gray-100 p-4 rounded-md hover:bg-[#3183FF] hover:text-white focus:text-white focus:bg-[#3183FF] text-sm font-medium data-[state=active]:bg-[#3183FF] data-[state=active]:text-white transition-colors duration-300 ease-in-out"
              >
                Create Account
              </Tabs.Trigger>
            </Tabs.List>

            {/* Conteúdo das abas */}
            <Tabs.Content
              value="tab1"
              className="mt-4 p-4 bg-gray-50 rounded-md border border-gray-200"
            >
              Content 1
            </Tabs.Content>
            <Tabs.Content
              value="tab2"
              className="mt-4 p-4 bg-gray-50 rounded-md border border-gray-200"
            >
              Content 2
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </div>
    </>
  );
}
