const ModalOverlay = ({ component, close }) => {
  return (
    <div
      id="container"
      onClick={(e) => {
        if (e.target.id === "container") close();
      }}
      className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-md flex justify-center items-center "
    >
      {component}
    </div>
  );
};

export default ModalOverlay;
