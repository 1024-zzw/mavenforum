package com.mavenforum.model.entity;

public class Admininfo {
    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column admininfo.adminid
     *
     * @mbg.generated Tue Sep 29 21:01:05 CST 2020
     */
    private String adminid;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column admininfo.adminpwd
     *
     * @mbg.generated Tue Sep 29 21:01:05 CST 2020
     */
    private String adminpwd;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column admininfo.adminid
     *
     * @return the value of admininfo.adminid
     *
     * @mbg.generated Tue Sep 29 21:01:05 CST 2020
     */
    public String getAdminid() {
        return adminid;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column admininfo.adminid
     *
     * @param adminid the value for admininfo.adminid
     *
     * @mbg.generated Tue Sep 29 21:01:05 CST 2020
     */
    public void setAdminid(String adminid) {
        this.adminid = adminid == null ? null : adminid.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column admininfo.adminpwd
     *
     * @return the value of admininfo.adminpwd
     *
     * @mbg.generated Tue Sep 29 21:01:05 CST 2020
     */
    public String getAdminpwd() {
        return adminpwd;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column admininfo.adminpwd
     *
     * @param adminpwd the value for admininfo.adminpwd
     *
     * @mbg.generated Tue Sep 29 21:01:05 CST 2020
     */
    public void setAdminpwd(String adminpwd) {
        this.adminpwd = adminpwd == null ? null : adminpwd.trim();
    }

	@Override
	public String toString() {
		return "Admininfo [adminid=" + adminid + ", adminpwd=" + adminpwd + "]";
	}

	public Admininfo(String adminid, String adminpwd) {
		super();
		this.adminid = adminid;
		this.adminpwd = adminpwd;
	}

	public Admininfo() {
		super();
		// TODO Auto-generated constructor stub
	}
}