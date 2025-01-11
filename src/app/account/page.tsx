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
                className="basis-1/2 border border-gray-200 bg-gray-50 p-4 rounded-t-md hover:bg-slate-500 hover:text-white focus:text-white focus:bg-slate-500 text-sm font-medium data-[state=active]:bg-slate-500 data-[state=active]:text-white"
              >
                Login
              </Tabs.Trigger>
              <Tabs.Trigger
                value="tab2"
                className="basis-1/2 border border-gray-200 bg-gray-50 p-4 rounded-t-md hover:bg-slate-500 hover:text-white focus:text-white focus:bg-slate-500 text-sm font-medium data-[state=active]:bg-slate-500 data-[state=active]:text-white"
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
