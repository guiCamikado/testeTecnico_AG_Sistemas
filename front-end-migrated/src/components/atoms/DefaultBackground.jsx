function DefaultBackground({ children }) {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-r from-black via-gray-900 to-gray-700 flex items-center justify-center">
      {children}
    </div>
  );
}


export default DefaultBackground;