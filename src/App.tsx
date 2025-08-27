function App() {
  document.title = window.location.hostname;

  return (
    <>
      <div className="w-svw h-svh flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold font-mono">
          {window.location.hostname}
        </h1>
      </div>
    </>
  );
}

export default App;
